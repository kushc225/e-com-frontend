// CATEGORY TYPE CONSTANT

import { CategoryType } from "@/types/common.type";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci"; import { MdComputer } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";

export const CATEGORIES: CategoryType[] = [
    { Component: IoIosPhonePortrait, title: 'Phone', active: false },
    { Component: MdComputer, title: 'Computers', active: false },
    { Component: BsSmartwatch, title: 'Smart Watch', active: true },
    { Component: CiCamera, title: 'Camera', active: false },
    { Component: CiHeadphones, title: 'HeadPhone', active: false },
    { Component: GiConsoleController, title: 'Gaming', active: false },
  ];