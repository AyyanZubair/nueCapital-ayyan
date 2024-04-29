import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { InputAdornment, FormControlLabel, Switch } from '@mui/material';

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

    const handleChange = (event) => {
        setStatus(event.target.checked);
    };

    return (
        <div>
            <div className="header flex justify-between items-center">
                <div className="left flex gap-4 items-center">
                    <HomeIcon
                        className='bg-[#033329] rounded-full text-white' style={{ fontSize: 30, padding: 2 }} />
                    <span>{currentTime}</span>
                </div>
                <div className="right flex items-center">
                    <CircleNotificationsIcon
                        className='bg-[#033329] text-white rounded-full'
                        style={{ fontSize: 35 }} />
                </div>
            </div>
            <div className="content my-6">
                <h2 className='text-3xl'>Permission Management</h2>
                <div className='flex gap-2'>
                    <EventNoteIcon />
                    <p>{lastUpdate}</p>
                </div>
                <div className="new-permission my-6 border border-[#033329] rounded-[1.6rem] overflow-hidden">
                    <div className='flex justify-between bg-[#033329] h-12 items-center rounded-full text-white'>
                        <h3 className='mx-4 text-white font-bold'>New Permission</h3>
                        <h3 className='mr-[57%] text-xs'>| {currentTime}</h3>
                        <div className="buttons flex gap-6 mx-4">
                            <button
                                onClick={handleAddPermission}
                                className='bg-white px-4 py-1 rounded-full text-black'>Save</button>
                            <button className='border rounded-full px-4 py-1 text-white'>Cancel</button>
                        </div>
                    </div>
                    <div className="input-fields">
                        <div className='flex justify-between my-4 px-4 mr-5'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Menu Name</label>
                                <input
                                    type="text"
                                    value={menuName}
                                    onChange={(e) => setMenuName(e.target.value)}
                                    className='border rounded-full'

                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Action Name</label>
                                <input
                                    type="text"
                                    value={actionName}
                                    onChange={(e) => setActionName(e.target.value)}
                                    className='border rounded-full'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Status</label>

                                <input
                                    type="text"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className='border rounded-full'
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <FormControlLabel
                                                    control={<Switch checked={status} onChange={handleChange} />}
                                                    label="Status"
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex justify-between px-4 my-6'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Menu URL</label>
                                <input
                                    type="text"
                                    value={menuName}
                                    onChange={(e) => setMenuName(e.target.value)}
                                    className='border rounded-full'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">API URL</label>
                                <input
                                    type="text"
                                    value={menuName}
                                    onChange={(e) => setMenuName(e.target.value)}
                                    className='border rounded-full'
                                />
                            </div>
                            <div className='flex flex-col mr-[1rem]'>
                                <label htmlFor="moduleName">Module Name</label>
                                <select
                                    id="moduleName"
                                    value={menuName}
                                    onChange={(e) => setMenuName(e.target.value)}
                                    className='border rounded-full'
                                    style={{ width: '180px' }}
                                >
                                    <option value="">Select Module</option>
                                    <option value="module1">Module 1</option>
                                    <option value="module2">Module 2</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className="add-permission-btn bg-[#033329] text-white text-md px-4 py-1 rounded-full">+ Add New Permission</button>
                </div>

            </div>
        </div>
    );
};

export default Permissions;
