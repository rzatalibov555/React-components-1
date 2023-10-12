import style from './style.module.css';
import { MenuItem } from '../MenuListItem';


export function MenuList(){
    return(
        <div className={style.box}> 
            <MenuItem></MenuItem>
        </div>
    )
}