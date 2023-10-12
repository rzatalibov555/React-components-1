import style from './style.module.css';

export function MenuItem(){
    return(
        <div>
            <div className={style.item}>Easy</div>
            <div className={style.item}>Medium</div>
            <div className={style.item}>Hard</div>
            <div className={style.item}>Very Hard</div>
        </div>
    )
}