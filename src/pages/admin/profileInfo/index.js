import { Button, Typography } from "@mui/material";

const ProfileInfo = () => {
  return (
    <div>
      <h1 className="text-start text-black text-[24px] font-normal">Account Information</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 text-base text-themeDarkGreen" >
            <div>
              <p className="font-bold mt-3 mb-3" >Name</p>
              <div className="border px-2 py-2 rounded-md border-themeDarkGreen">NUE Capital</div>
            </div>
         </div>  
         <div className="grid md:grid-cols-2 grid-cols-1 text-base text-themeDarkGreen" > 
            <div >
              <p className="font-bold mt-3 mb-3">Email address</p>
              <div className="border px-2 py-2 rounded-md border-themeDarkGreen">demo@nuecapital.com</div>
            </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 text-base text-themeDarkGreen" >
            <div>
              <p className="font-bold mt-3 mb-3">Phone Number</p>
              <div className="border px-2 py-2 rounded-md border-themeDarkGreen">+966 59 149 3321</div>
            </div>
        </div>
            <button className="text-lg text-red-600 cursor-pointer mt-2 font-bold" >Delete Account</button>
    </div>
  );
};

export default ProfileInfo;
