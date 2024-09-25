import styles from '../../styles/Button.module.scss';
import FeatherIcon from 'feather-icons-react';

export default function Buttons(props) {

    const Primary = (props) => {
        return (
            <>
                <button className={props.drop ? styles.dropPrimary : styles.PrimaryBtn}><button className={styles.text}>{props.text}</button></button>
            </>
        )
    }

    const Second = (props) => {
        return (
            <>
                <button className={`${props.drop ? styles.dropSecond :styles.SecondBtn} ${styles[props.theme]} ${styles[props.width]}`}><button className={styles.text}>{props.text}</button></button>
            </>
        )
    }

    const Dashboard = (props) => {
        return (
            <>
                <button className={styles.dashIcon}><div><FeatherIcon icon={props.icon} color={props.color} size="15" stroke-width="2.5"/></div></button>
            </>
        )
    }

    const RenderBtn = (props) => {
        if (props.type === 'primary') {
            return (<Primary {...props} />)
        } else if (props.type === 'second') {
            return (<Second {...props} />)
        } else if (props.type === 'dashboard') {
            return (<Dashboard {...props} />)
        }
    }

    return (
        <>
            <RenderBtn {...props} />
        </>
    )
}