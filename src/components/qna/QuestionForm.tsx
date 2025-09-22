"use client";

import { useActionState, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
import { questionCategoryEnum } from "../../../lib/db/schema";
import {
  createQuestions,
  QuestionFormState,
} from "../../../server/actions/questions/questions";
import Loader from "../Loader";
import { toast } from "sonner";

export default function QuestionForm({
  onOpen,
}: {
  readonly onOpen?: (bool: boolean) => void;
}) {
  const [category, setCategory] = useState<string>("");
  const [language, setLanguage] = useState<string>("english");
  const [description, setDescription] = useState<string>("");
  const categoryOptions = questionCategoryEnum.enumValues;

  const initialState: QuestionFormState = {
    errors: {
      properties: {
        title: [],
        description: [],
        language: [],
        category: [],
      },
    },
    message: "",
    success: false,
    timestamp: new Date(),
  } as QuestionFormState;

  const [state, formAction, isPending] = useActionState<
    QuestionFormState,
    FormData
  >(createQuestions, initialState);

  useEffect(() => {
    if (state.success && state.message) {
      toast(state.message);
    }
    if (!state.success && state.message) {
      toast(state.message);
    }
  }, [state.success, state.message, state.timestamp]);
  if (typeof window === "undefined") return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-12 transition-all ease-in duration-300  fixed -translate-x-1/2 -translate-y-1/2 inset-0 top-1/2 left-1/2">
      <Card className="w-full opacity-100 max-w-3xl relative text-[#e1e1e1] bg-[#272525] hover:bg-[#141212] border-1 border-[#ffffff]">
        <Button
          className="absolute top-4 right-4 cursor-pointer hover:rotate-180 transition duration-150 ease-in"
          onClick={() => onOpen?.(false)}
        >
          <XIcon />
        </Button>
        <CardHeader className="text-center">
          <CardTitle>Submit Your Question</CardTitle>
          <CardDescription>
            Please fill out the form below to submit your question.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="title"
                  placeholder="Enter your title"
                  required
                  name="title"
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="description">Description</Label>
                </div>
                <Textarea
                  placeholder="Enter your description"
                  className="border-1 border-[#ffffff] rounded-[4px] pl-2 py-2 px-2 w-full placeholder:bg-transparent text-[#e1e1e1] focus:outline-none"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <input type="hidden" name="description" value={description} />

              <div className="flex justify-between gap-6">
                <div className="flex-1">
                  <Select
                    defaultValue="fundamental-rights-and-duties"
                    onValueChange={(value) => setCategory(value)}
                  >
                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="max-h-64">
                      {categoryOptions.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat.replace(/-/g, " ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="category" value={category} />
                </div>

                <div className="flex-1">
                  <Label className="block text-sm mb-2">Language</Label>
                  <Select
                    defaultValue="english"
                    onValueChange={(value) => setLanguage(value)}
                  >
                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="max-h-64 overflow-y-auto">
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="nepali">Nepali</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="language" value={language} />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-[90%] mt-8 mx-auto flex items-center justify-center bg-[#353535] hover:bg-[#1d1d1d] text-[#e1e1e1] hover:text-[#ffffff] border-1 border-[#ffffff] rounded-[4px] py-2 px-4 cursor-pointer transition-colors duration-300 ease-in-out"
              disabled={isPending || !category || !language}
            >
              {isPending ? <Loader /> : "create question"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
