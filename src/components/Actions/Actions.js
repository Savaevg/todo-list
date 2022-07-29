import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import s from './Actions.module.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Actions = ({changeTab,tab}) => {
    return (
        <div className={s.wrapper}>
            <Tabs value={tab} onChange={(e,tabValue)=>changeTab(tabValue)} centered>
                <Tab label={<FormatListBulletedIcon/>} />
                <Tab label={<RadioButtonUncheckedIcon/>} />
                <Tab label={<TaskAltIcon/>} />
            </Tabs>


        </div>
    )
}


export default Actions