
"use client"


import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';



const profilepage = () => {
      const userData = authClient.useSession ();
      const user = userData.data?.user;
    return (
        <div>
            <Card className='flex flex-col items-center max-w-96 mx-auto mt-10'>
                
                    <Avatar className='h-40 w-40'>
                        <Avatar.Image alt="John Doe" src={user?.image} 
                        referrerPolicy="no-referrer"/>
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>
                <h2 className='text-4xl font-bold'>{user?.name}</h2>
                <p className='text-lg text-gray-500'>{user?.email}</p>
           
            </Card>
        </div>
    );
};

export default profilepage;