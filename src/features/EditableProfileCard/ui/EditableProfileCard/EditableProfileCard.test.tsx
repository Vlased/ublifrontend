import { screen } from '@testing-library/react'
import { profileReducer } from '../../model/slice/profileSlice'
import { Profile } from 'pages/ProfilePage'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'
import { EditableProfileCard } from './EditableProfileCard'
import userEvent from '@testing-library/user-event'
import { $api } from 'shared/api/api'

const data: Profile = {
  id: '1',
  firstName: 'firstName',
  lastName: 'lastName',
  age: 12,
  currency: Currency.UAH,
  country: Country.Ukraine,
  city: 'city',
  username: 'username',
  avatar: 'https://www.w3schools.com/w3css/img_avatar3.png'
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data,
      form: data
    },
    user: {
      authData: {
        id: '1',
        username: 'username'
      }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
}

describe('EditableProfileCard', () => {
  test('turn off readonly', async () => {
    componentRender(<EditableProfileCard id="1" />, options)

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
  })

  test('should clear data after clicking on the cancel button', async () => {
    componentRender(<EditableProfileCard id='1' />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'))
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'))

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'test')
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'test')

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('test')
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('test')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('firstName')
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('lastName')
  })

  test('error message should be displayed', async () => {
    componentRender(<EditableProfileCard id='1' />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'))
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'))

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })

  test('the PUT request should be made if there are not validation errors', async () => {
    const mockPutReq = jest.spyOn($api, 'put')

    componentRender(<EditableProfileCard id='1' />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user')
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect(mockPutReq).toHaveBeenCalled()
  })
})
