import React, { useContext } from 'react';
import TripDataContext from '../contexts/TripDataContext';
import { Button } from "@mui/material";

const DownloadJsonButton = () => {
    const { tripData } = useContext(TripDataContext);

    const handleDownload = () => {
        const fileName = "tripData.json";
        const json = JSON.stringify(tripData, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <Button onClick={handleDownload}>Download JSON</Button>;
};

export default DownloadJsonButton;
