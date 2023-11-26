import Styles from './Input.module.css'
const Input = ({namew}) => {
    return (
        <div className={Styles.container}> 
            <label className={Styles.label}>{namew}</label>
            <input type="text" className={Styles.input}></input>
        </div>
    )
}

export default Input