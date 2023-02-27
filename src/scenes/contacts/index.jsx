import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../component/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID", flex:0.5 },
        { field: "registrarId", headerName: "Registrar ID"},
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-colums--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field:"address",
            headerName:"Address",
            flex:1
        },
        {
            field:"city",
            headerName:"City",
            flex:1
        },
        {
            field:"zipCode",
            headerName:"ZipCode",
            flex:1
        },
    ];
    return (
        <Box m='20px'>
            <Header title='CONTACTS' subtitle='List of Contacts for Future Reference' />
            <Box mt='40px' height='75vh' sx={{
                "& .MuiDataGrid-root":{
                    border:"none"
                },
                "& .MuiDataGrid-cell":{
                    borderBottom:"none"
                },
                "& .name-colums--cell":{
                    color:colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeader":{
                    backgroundColor:colors.blueAccent[700],
                    border:"none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor:colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer":{
                    backgroundColor:colors.blueAccent[700],
                    border:"none"
                },
                "& .MuiDataGrid-toolbarContainer button":{
                    color:`${colors.greenAccent[200]} !important`,
                    // border:"none"
                },
            }}>
                <DataGrid rows={mockDataContacts} columns={columns} components={{Toolbar:GridToolbar}}/>
            </Box>
        </Box>
    );
};

export default Team;
