import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { InputAdornment, FormControlLabel, Switch } from '@mui/material';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { useRouter } from 'next/router';

const Permissions = () => {
    const [menuName, setMenuName] = useState('');
    const [actionName, setActionName] = useState('');
    const [status, setStatus] = useState('');
    const [menuUrl, setMenuUrl] = useState('');
    const [apiUrl, setApiUrl] = useState('');
    const [moduleName, setModuleName] = useState('');
    const [permissions, setPermissions] = useState([]);
    const [lastUpdate, setLastUpdate] = useState('Last update: 1 year ago');
    const currentTime = new Date().toLocaleString();

    const handleAddPermission = () => {
        const newPermission = {
            menuName,
            actionName,
            status,
            menuUrl,
            apiUrl,
            moduleName
        };
        setPermissions([...permissions, newPermission]);
        // Reset input fields after adding permission
        setMenuName('');
        setActionName('');
        setStatus('');
        setMenuUrl('');
        setApiUrl('');
        setModuleName('');
        // Update last update time
        setLastUpdate(`Last update: ${new Date().toLocaleDateString()}`);
    };

    // Function to toggle row expansion
    const toggleRowExpansion = (index) => {
        const updatedPermissions = permissions.map((permission, i) => {
            if (i === index) {
                return { ...permission, expanded: !permission.expanded };
            }
            return permission;
        });
        setPermissions(updatedPermissions);
    };

    const router = useRouter()

    const handleClick = () => {
        router.push("/admin/permissions/addNewPermission")
    }

    return (
        <div>
            <div className="content my-6">
                <h2 className='text-3xl'>Permission Management</h2>
                <div className='flex gap-2'>
                    <EventNoteIcon />
                    <p>{lastUpdate}</p>
                </div>
                <input className='my-4 border rounded-full' type="search" placeholder='search keyword' />

                {/* New Permission Section */}
                <div className="new-permission my-6 border border-[#033329] rounded-[1.6rem] overflow-hidden">
                    {/* Form Inputs */}
                    {/* Add your form inputs here */}
                </div>

                {/* Table */}
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th>Menu Name <ImportExportIcon /></th>
                            <th>Menu URL <ImportExportIcon /></th>
                            <th>API URL <ImportExportIcon /></th>
                            <th>Status</th>
                            <th>Data Modified <ImportExportIcon /></th>
                            <th></th> {/* Empty header for Delete button */}
                        </tr>
                    </thead>
                    <tbody>
                        {permissions.length === 0 ? (
                            <tr>
                                <div>
                                    <td colSpan="6">911 Alert Processing</td>
                                </div>
                                
                            </tr>
                        ) : (
                            permissions.map((permission, index) => (
                                <React.Fragment key={index}>
                                    <tr onClick={() => toggleRowExpansion(index)}>
                                        <td>{permission.menuName}</td>
                                        <td>{permission.menuUrl}</td>
                                        <td>{permission.apiUrl}</td>
                                        <td>{permission.status}</td>
                                        <td>{permission.dataModified}</td>
                                        <td>{permission.expanded ? '-' : '+'}</td>
                                    </tr>
                                    {permission.expanded && (
                                        <tr>
                                            <td colSpan="6"> {/* Colspan to span across all columns */}
                                                {/* Expanded content */}
                                                {/* Add your expanded content here */}
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))
                        )}
                    </tbody>

                </table>

                {/* Button to Add New Permission */}
                <div className='flex justify-end'>
                    <button
                        onClick={handleClick}
                        className="add-permission-btn bg-[#033329] text-white text-md px-4 py-1 rounded-full"
                    >+ Add New Permission</button>
                </div>

            </div>
        </div>
    );
};

export default Permissions;
