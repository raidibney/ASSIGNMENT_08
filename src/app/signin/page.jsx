"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
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
import { motion } from "framer-motion"; // Added Framer Motion

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
        toast.success("Login successful!");
        router.push("/");
      },
      onError: (ctx) => {
        setLoading(false);
        toast.error(ctx.error.message || "Authentication failed");
      }
    });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="border-none shadow-2xl mx-auto w-full max-w-[450px] py-10 px-8 bg-white/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-center text-slate-500 mb-8 text-sm">
              Please enter your details to sign in.
            </p>
          </motion.div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              className="group"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-slate-700 font-medium">Email</Label>
              <Input 
                placeholder="john@example.com" 
                className="transition-all duration-200 hover:border-slate-400 focus:ring-2 focus:ring-blue-500/20"
              />
              <FieldError className="text-xs mt-1" />
            </TextField>

            <TextField
              isRequired
              name="password"
              type="password"
            >
              <Label className="text-slate-700 font-medium">Password</Label>
              <Input 
                placeholder="Enter your password" 
                className="transition-all duration-200 hover:border-slate-400 focus:ring-2 focus:ring-blue-500/20"
              />
              <FieldError className="text-xs mt-1" />
            </TextField>

            <div className="flex flex-col gap-3 mt-2">
              <Button 
                type="submit" 
                isLoading={loading}
                className="w-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200 transition-transform active:scale-95"
              >
                {!loading && <Check className="mr-2" />}
                Sign In
              </Button>
              
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-400">Or continue with</span>
                </div>
              </div>

              <Button 
                variant="bordered"
                className="w-full border-slate-200 hover:bg-slate-50 transition-all active:scale-95" 
                onClick={handleGoogleSignIn}
              >
                <GrGoogle className="mr-2 text-red-500" /> Google
              </Button>
            </div>
          </Form>

          <p className="text-center mt-8 text-xs text-slate-400">
            By signing in, you agree to our Terms of Service.
          </p>
        </Card>
      </motion.div>
    </div>
  );
}