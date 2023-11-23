"use client";
import React, {useState} from 'react';
import {Box, Button, Stack, TextField} from "@mui/material";
import {createBroadcast} from "@/actions/broadcast";
import {useRouter} from "next/navigation";

function BroadcastForm() {

    const [message, setMessage] = useState('');
    const router = useRouter();
    const submit = () => {
        createBroadcast(message).then(() => {
            router.refresh();
            setMessage('');
        });
    };

    return (
        <Box>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit();
            }}>
                <Stack direction="column" spacing={2}>
                    <TextField
                        fullWidth
                        multiline
                        required
                        variant="filled"
                        label="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button variant="contained" type="submit" size="large">Publish</Button>
                </Stack>

            </form>
        </Box>
    );
}

export default BroadcastForm;