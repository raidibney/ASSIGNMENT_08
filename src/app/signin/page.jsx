"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await authClient.signIn.email({
      email,
      password,
    }, {
      onRequest: () => {
        setLoading(true);
      },
      onSuccess: () => {
        setLoading(false);
        // Added the specific success message here
        toast.success("Login successful!"); 
        router.push("/"); 
      },
      onError: (ctx) => {
        setLoading(false);
        toast.error(ctx.error.message || "Authentication failed");
      }
    });
  };
  // Handler for Google Sign-In
 const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google" 
      
    });
  };
  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" isLoading={loading}>
            <Check />
            Sign In
          </Button>
          <Button type="reset" variant="secondary" isDisabled={loading}>
            Reset
          </Button>
        </div>
      </Form>
      <Button className="mt-4 items-center text-center" onClick={handleGoogleSignIn}>
        <GrGoogle /> Sign In With Google
      </Button>
    </Card>
  );
}