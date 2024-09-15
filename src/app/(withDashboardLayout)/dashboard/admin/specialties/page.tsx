"use client"
import { Box, Button, CircularProgress, IconButton, Stack, TextField } from "@mui/material";
import SpecialtyModal from "./components/SpecialistModal";
import { useState } from "react";
import { useDeleteSpecialtyMutation, useGetAllSpecialtiesQuery } from "@/redux/api/specialties.Api";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "sonner";


const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { data, isLoading } = useGetAllSpecialtiesQuery({})
    const [deleteSpecialty] = useDeleteSpecialtyMutation()

    const handleDelete = async (id: string) => {
        console.log(id)
    }
    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', width: 400 },
        {
            field: 'Icon',
            headerName: 'Icon',
            flex: 1,
            renderCell: ({ row }) => {
                return <Box mt={2}>
                    <Image src={row.icon} width={30} height={30} alt="Icon" />
                </Box>
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
                return (
                    <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>)
            }
        },
    ];

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
                <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
                <TextField size="small" placeholder="Search Specialties" />
            </Stack>
            {!isLoading ? <Box my={2}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    sx={{ border: 0 }}
                />
            </Box> : <CircularProgress />}
        </Box>
    );
};

export default SpecialtiesPage;