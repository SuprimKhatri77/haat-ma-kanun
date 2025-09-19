"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { XIcon } from "lucide-react";
// import { createQuestion } from "@/app/actions/questions"; // 👈 server action

// ----------------- SCHEMA -----------------
const formSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(5, "Description is required"),
  language: z.enum(["nepali", "english"]),
  category: z.enum([
    "preliminary",
    "citizenship",
    "fundamental-rights-and-duties",
    "directive-principles-policies-and-obligations-of-the-state",
    "structure-of-the-state-and-distribution-of-state-power",
    "president-and-vice-president",
    "federal-legislature",
    "federal-executive",
    "federal-legislature-procedure",
    "federal-financial-procedures",
    "judiciary",
    "attorney-general",
    "state-legislature",
    "state-executive",
    "state-legislative-procedure",
    "state-financial-procedure",
    "state-judiciary",
    "local-executive",
    "local-legislature",
    "interrelations-between-federation-state-and-local-level",
    "political-parties",
    "emergency-power",
    "constitutional-bodies",
    "provision-regarding-national-security",
    "provision-regarding-public-service",
    "election-commission",
    "local-commissions",
    "provision-regarding-finance-property-and-revenue",
    "inter-governmental-relations",
    "provision-regarding-amendment-of-constitution",
    "miscellaneous",
    "transitional-provisions",
    "definitions-and-interpretation",
    "short-title-commencement-and-repeal",
    "schedules",
  ]),
});

type FormData = z.infer<typeof formSchema>;

// ----------------- COMPONENT -----------------
export default function QuestionForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      language: "english",
      category: "fundamental-rights-and-duties",
    },
  });

  return (
    // Updated background and centering for a more professional look

    <div
      className="min-h-screen  flex items-center justify-center  p-6 sm:p-12 transition-all ease-in duration-300 bg-black/70 absolute -translate-x-1/2 -translate-y-1/2
      inset-0  top-1/2 left-1/2"
    >
      {" "}
      <Card className="w-full opacity-100 max-w-3xl relative  text-[#e1e1e1] bg-[#272525] hover:bg-[#141212] border-1 border-[#ffffff]">
        <span className="absolute top-4 right-4 cursor-pointer hover:rotate-180 transition duration-150 ease-in">
          <XIcon />
        </span>
        <CardHeader className="text-center">
          <CardTitle>Submit Your Question</CardTitle>
          <CardDescription>
            Please fill out the form below to submit your question.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="title"
                  placeholder="Enter your title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="description">Description</Label>
                </div>
                <textarea
                  placeholder="Enter your description"
                  className="border-1 border-[#ffffff] rounded-[4px] pl-2 py-2 px-2 w-full placeholder:bg-transparent text-[#e1e1e1] focus:outline-none"
                ></textarea>
              </div>
              <div className="flex justify-between">
                {/* Category */}
                <div>
                  <label className="block text-sm mb-2">Category</label>
                  <Select
                    defaultValue="fundamental-rights-and-duties"
                    onValueChange={(value) =>
                      form.setValue("category", value as FormData["category"])
                    }
                  >
                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="max-h-64 overflow-y-auto">
                      {formSchema.shape.category.options.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat.replace(/-/g, " ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Language</label>
                  <Select
                    defaultValue="english"
                    onValueChange={(value) =>
                      form.setValue("language", value as FormData["language"])
                    }
                  >
                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="max-h-64 overflow-y-auto">
                      {formSchema.shape.language.options.map((lang) => (
                        <SelectItem key={lang} value={lang}>
                          {lang.replace(/-/g, " ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="w-[90%] mt-8 mx-auto flex items-center justify-center bg-[#353535] hover:bg-[#1d1d1d] text-[#e1e1e1] hover:text-[#ffffff] border-1 border-[#ffffff] rounded-[4px] py-2 px-4 cursor-pointer transition-colors duration-300 ease-in-out"
              disabled={loading}
              //   loading={loading}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
