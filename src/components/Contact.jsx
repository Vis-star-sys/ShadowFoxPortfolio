"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactUs() {
  const [loading, setLoading] = useState(false); // <- Track button loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const message = e.target[2].value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true); // Start loading

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      alert("✅ Message sent!");
      e.target.reset();
    } catch (error) {
      console.error("Error saving message:", error);
      alert("❌ Something went wrong.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen px-6 py-24 bg-transparent text-foreground flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-300/50 dark:border-slate-800 shadow-2xl rounded-[2rem] p-8">
            <CardContent className="p-0 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <Sparkles className="dark:text-white animate-pulse" />
                <h2 className="text-4xl font-extrabold tracking-tight dark:text-white animate-pulse">
                  Let’s Connect
                </h2>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="grid grid-cols-1 gap-6"
                onSubmit={handleSubmit}
              >
                <Input
                  placeholder="Your Name"
                  className="bg-white/70 dark:bg-white/10 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-teal-400 focus:outline-none backdrop-blur-md"
                />
                <Input
                  placeholder="Your Email"
                  type="email"
                  className="bg-white/70 dark:bg-white/10 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-teal-400 focus:outline-none backdrop-blur-md"
                />
                <Textarea
                  placeholder="Write your message..."
                  rows={5}
                  className="bg-white/70 dark:bg-white/10 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-teal-400 focus:outline-none backdrop-blur-md"
                />
                <Button
                  type="submit"
                  variant="default"
                  disabled={loading}
                  className="flex items-center gap-2  dark:bg-white hover:bg-blue-00 dark:text-black font-medium rounded-md transition-all duration-200 shadow-xl"
                >
                  {loading ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
