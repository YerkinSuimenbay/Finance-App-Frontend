import { IconType } from 'react-icons/lib'
import './icons.css'
import { AiOutlineBank, AiOutlineHome, AiOutlineCar, AiFillCar, AiOutlineShoppingCart, AiOutlineWifi } from 'react-icons/ai'
import { MdOutlineAddBox, MdAttachMoney, MdMoney, MdFastfood, MdOutlineFastfood, MdOutlineHealthAndSafety, MdOutlineSchool, MdSportsBar, MdOutlineFamilyRestroom, MdRestaurant, MdRestaurantMenu } from 'react-icons/md'
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward, IoIosBeer, IoMdBus, IoMdShirt, IoMdSchool } from 'react-icons/io'
import { GiMoneyStack, GiTakeMyMoney, GiPayMoney, GiReceiveMoney, GiMeal, GiHotMeal, GiWineBottle, GiHealthNormal, GiMedicines, GiSlicedBread, GiKickScooter } from 'react-icons/gi'
import { GrMoney } from 'react-icons/gr'
import { RiMoneyDollarCircleLine, RiMoneyEuroCircleLine, RiMoneyPoundCircleLine, RiBusFill } from 'react-icons/ri'
import { BiDrink, BiBeer, BiCut } from 'react-icons/bi'
import { FaTshirt, FaHands } from 'react-icons/fa'
import { CgGym } from 'react-icons/cg'
import { BsSearch } from 'react-icons/bs'
// const icons = {
//     AiOutlineBank,
// }


export type TIcon = Record<string, IconType>

const CATEGORY_ICONS: TIcon = {
    AiOutlineBank,
    MdOutlineAddBox,
    AiOutlineHome,
    GiMoneyStack,
    GiTakeMyMoney,
    GiPayMoney,
    GiReceiveMoney,
    // GrMoney,
    MdAttachMoney,
    MdMoney,
    RiMoneyDollarCircleLine,
    RiMoneyEuroCircleLine,
    RiMoneyPoundCircleLine,
    GiMeal,
    GiHotMeal,
    MdFastfood,
    MdOutlineFastfood,
    AiOutlineCar,
    AiFillCar,
    AiOutlineShoppingCart,
    BiDrink,
    IoIosBeer,
    // BiBeer,
    GiWineBottle,
    GiHealthNormal,
    MdOutlineHealthAndSafety,
    GiMedicines,
    // IoMdBus,
    RiBusFill,
    IoMdShirt,
    FaTshirt,
    AiOutlineWifi,
    BiCut,
    GiSlicedBread,
    MdOutlineSchool,
    IoMdSchool,
    GiKickScooter,
    MdSportsBar,
    // CgGym,
    FaHands,
    // MdOutlineFamilyRestroom,
    // MdRestaurant,
    // MdRestaurantMenu,
    BsSearch,
}

const GENERAL_ICONS: TIcon = {
    IoIosArrowDown,
    IoIosArrowUp,
    IoIosArrowForward,
    MdOutlineAddBox,
    BsSearch,
}

const ACCOUNT_ICONS: TIcon = {
    AiOutlineBank
}

export default {
    GENERAL_ICONS,
    ACCOUNT_ICONS,
    CATEGORY_ICONS,
}