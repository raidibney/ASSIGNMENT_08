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
import { motion } from "framer-motion"; // Added for premium animations

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");
    const email = formData.get("email");
    const password = formData.get("password");

    await authClient.signUp.email({
      email,
      password,
      name,
      image,
      dontSession: true,
    }, {
      onRequest: () => {
        setLoading(true);
      },
      onSuccess: () => {
        setLoading(false);
        toast.success("Account created successfully!");
      
        router.push("/");
      },
      onError: (ctx) => {
        setLoading(false);
        toast.error(ctx.error.message || "Registration failed. Please try again.");
      }
    });
  };

  // Animation variants for a staggered entry effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 p-6">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-[500px]"
      >
        <Card className="border-none shadow-2xl py-12 px-2 bg-white/80 backdrop-blur-md">
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Create Account
            </h1>
            <p className="text-slate-500 mt-2">Join our premium community today</p>
          </motion.div>

          <Form className="flex w-full max-w-sm mx-auto flex-col gap-6" onSubmit={onSubmit}>
            <motion.div variants={itemVariants}>
              <TextField isRequired name="name" type="text" className="group">
                <Label className="text-slate-700 font-medium">Full Name</Label>
                <Input 
                   placeholder="Enter your name" 
                   className="transition-all duration-200 focus:ring-2 focus:ring-blue-500/20"
                />
                <FieldError />
              </TextField>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextField isRequired name="image" type="text">
                <Label className="text-slate-700 font-medium">Avatar URL</Label>
                <Input placeholder="https://example.com/avatar.jpg" />
                <FieldError />
              </TextField>
            </motion.div>

            <motion.div variants={itemVariants}>
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
                <Label className="text-slate-700 font-medium">Email Address</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) return "Password must be at least 8 characters";
                  if (!/[A-Z]/.test(value)) return "Need one uppercase letter";
                  if (!/[0-9]/.test(value)) return "Need one number";
                  return null;
                }}
              >
                <Label className="text-slate-700 font-medium">Password</Label>
                <Input placeholder="••••••••" />
                <Description className="text-[10px] text-slate-400">
                  Min. 8 characters • 1 Uppercase • 1 Number
                </Description>
                <FieldError />
              </TextField>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-3 mt-4">
              <Button 
                type="submit" 
                isLoading={loading}
                className="flex-1 bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200 transition-transform active:scale-95"
              >
                {!loading && <Check className="mr-2" />}
                Get Started
              </Button>
              <Button 
                type="reset" 
                variant="secondary" 
                isDisabled={loading}
                className="px-8 border-slate-200 hover:bg-slate-50 transition-colors"
              >
                Reset
              </Button>
            </motion.div>
          </Form>

          <motion.p variants={itemVariants} className="text-center mt-10 text-sm text-slate-400">
            Already have an account? <a href="/signin" className="text-slate-900 font-semibold hover:underline">Sign In</a>
          </motion.p>
        </Card>
      </motion.div>
    </div>
  );
}