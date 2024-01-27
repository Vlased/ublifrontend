module.exports = (componentName) => `import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './${componentName}.module.scss';
import { memo, FC } from 'react';

interface ${componentName}Props {
    className?: string;
}

export const ${componentName}: FC<${componentName}Props> = memo(({ className }) => {
    const { t } = useTranslation();
    
    return (
        <div className={classNames([styles.container, className])}>
           
        </div>
    );
});`;
