
"use client"


import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import {Envelope} from "@gravity-ui/icons";
import { Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEdit, BiUser } from 'react-icons/bi';



const profilepage = () => {
      const userData = authClient.useSession ();
      const user = userData.data?.user;
      const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({ name, image });
      }
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
                {/* modal is starting from hereeee */}
                <div>
                    <Modal>
      <Button variant="secondary"><BiEdit /> Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
               Update your profile information to keep your account up-to-date and personalized. You can change your name and profile picture here.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image</Label>
                    <Input placeholder="Enter image URL" />
                  </TextField>
                  <Modal.Footer>
              <Button type='submit' slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type='submit' slot="close">Save</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
                </div>
            </Card>
        </div>
    );
};

export default profilepage;