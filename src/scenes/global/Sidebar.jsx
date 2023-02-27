import { useEffect, useState } from "react";
import {
    Sidebar as ProSideBar,
    Menu,
    MenuItem,
    SubMenu,
    useProSidebar,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TImelineOutlinedIcon from "@mui/icons-material/TImelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "../../assets/avatar.jpg";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            component={<Link to={to} />}
            active={selected === title}
            style={{
                color:
                    selected === title
                        ? colors.blueAccent[400]
                        : colors.grey[100],
            }}
            onClick={() => {
                setSelected(title);
            }}
            icon={icon}>
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { collapseSidebar, collapsed } = useProSidebar();
    const [selected, setSelected] = useState("Dashboard");
    const Divider = ({ data }) => {
        return (
            <Typography
                variant='h5'
                color={colors.grey[100]}
                sx={{ m: "15px 0 5px 20px", fontWeight: "bold" }}>
                {data}
            </Typography>
        );
    };
    return (
        <ProSideBar
            backgroundColor={colors.primary[400]}
            rootStyles={{
                border: "none",
            }}
            defaultCollapsed
            onMouseEnter={() => collapseSidebar()}
            onMouseLeave={() => collapseSidebar()}>
            <Menu
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        if (level === 0) {
                            return {
                                // color: active ? "#eee" : "#455A64",
                                // backgroundColor: active ? "#fff" : undefined,
                                "&:hover": {
                                    backgroundColor: `${colors.blueAccent[900]} !important`,
                                },
                            };
                        }
                    },
                }}>
                <Box py={2} onClick={() => collapseSidebar()}>
                    {collapsed ? (
                        <Box display='flex'>
                            <MenuOutlinedIcon sx={{ margin: "auto" }} />
                        </Box>
                    ) : (
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            px={3}>
                            <Typography
                                component='h4'
                                fontWeight='semibold'
                                fontSize='20px'>
                                ADMIN
                            </Typography>
                            <CloseIcon />
                        </Box>
                    )}
                </Box>
                {!collapsed ? (
                    <Box>
                        <Box display='flex' justifyContent='center' m={1}>
                            <img
                                width={"100px"}
                                height='100px'
                                style={{
                                    borderRadius: "100%",
                                    display: "block",
                                }}
                                src={Avatar}
                                alt=''
                            />
                        </Box>
                        <Box>
                            <Typography
                                variant='h2'
                                textAlign='center'
                                color={colors.grey[100]}>
                                Pranav K.
                            </Typography>
                            <Typography
                                color={colors.greenAccent[500]}
                                textAlign='center'>
                                VP Fancy Admin
                            </Typography>
                        </Box>
                    </Box>
                ) : undefined}
                {/* MENU ITEMS */}
                <Box>
                    <Item
                        title='Dashboard'
                        to='/'
                        icon={<HomeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    {!collapsed ? <Divider data='Data' /> : undefined}
                    <Item
                        title='Manage Team'
                        to='/team'
                        icon={<PeopleOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title='Contact Information'
                        to='/contacts'
                        icon={<ContactsOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title='Invoices Balances'
                        to='/invoices'
                        icon={<ReceiptOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    {!collapsed ? <Divider data='Pages' /> : undefined}
                    <Item
                        title='Profile Form'
                        to='/form'
                        icon={<PersonOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title='Calendar'
                        to='/calendar'
                        icon={<CalendarMonthOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title='FAQ Page'
                        to='/faq'
                        icon={<HelpOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    {!collapsed ? <Divider data='Charts' /> : undefined}
                    <Item
                        title='Bar Chart'
                        to='/bar'
                        icon={<BarChartOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title='Pie Chart'
                        to='/pie'
                        icon={<PieChartOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title='Line Chart'
                        to='/line'
                        icon={<TImelineOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title='Geography Chart'
                        to='/geography'
                        icon={<MapOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
            </Menu>
        </ProSideBar>
    );
};

export default Sidebar;
