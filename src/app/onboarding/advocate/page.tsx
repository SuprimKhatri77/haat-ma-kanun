"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect, useState } from "react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import CustomProfileUploader from "@/components/CustomImageUploadButton";
import Loader from "@/components/Loader";
import { advocateTypeEnum } from "../../../../lib/db/schema";

type MentorOnboardingFormProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  currentUserId?: string;
};

export default function MentorOnboardingForm({
  className,
  currentUserId,
  ...props
}: MentorOnboardingFormProps) {
  const [citizenshipPhotoUrl, setCitizenshipPhotoUrl] = useState<string>("");
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string>("");
  const [licenseFileUrl, setLicenseFileUrl] = useState<string>("");
  const router = useRouter();
  const [gender, setGender] = useState<string>("");
  const [advocateType, setAdvocateType] = useState<string>("");
  const advocateTypeOptions = advocateTypeEnum.enumValues;

  //   const initialState: FormState = {
  //     errors: {},
  //   } as FormState;

  //   const [state, formAction, isPending] = useActionState<FormState, FormData>(
  //     OnboardingMentor,
  //     initialState
  //   );

  //   useEffect(() => {
  //     if (state.message) {
  //       toast(state.message);
  //     }
  //   }, [state.message]);

  //   useEffect(() => {
  //     if (state.success && state.redirectTo) {
  //       router.replace(state.redirectTo);
  //     }
  //   }, [state.redirectTo, router]);

  return (
    <div
      className={cn(
        "flex flex-col gap-6 py-5 max-w-[700px] mx-auto  justify-center min-h-screen",
        className
      )}
      {...props}
    >
      <Card>
        <CardHeader>
          <CardTitle>Advocate Onboarding Form</CardTitle>
          <CardDescription>
            Please fill all the form fields and help us verify if you are a
            valid advocate or not.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="">
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="profilePhotoUrl">Profile Picture: </Label>
                </div>
                <CustomProfileUploader
                  currentImage={profilePhotoUrl}
                  onUploadComplete={(url: string) => setProfilePhotoUrl(url)}
                  imageUploadName="Upload Your Photo"
                />
                <Input
                  type="hidden"
                  name="imageUrl"
                  value={profilePhotoUrl}
                  required
                />
                {/* {state.errors?.imageUrl && (
                  <p className="text-red-400 text-sm">
                    {state.errors.imageUrl[0]}
                  </p>
                )} */}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="address">Address</Label>
                </div>
                <Input type="text" name="address" id="address" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="sex">Gender</Label>
                <Select
                  name="sex"
                  onValueChange={(value) => setGender(value)}
                  value={gender}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="select one" />
                  </SelectTrigger>
                  <SelectContent id="gender">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                {/* {state.errors?.sex && (
                  <p className="text-sm text-destructive">
                    {state.errors.sex[0]}
                  </p>
                )} */}
                <input type="hidden" name="sex" value={gender} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="advocateType">Advocate Type</Label>
                <Select onValueChange={(value) => setAdvocateType(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Advocate Type" />
                  </SelectTrigger>
                  <SelectContent id="advocateType">
                    {advocateTypeOptions.map((adv) => (
                      <SelectItem value={adv} key={adv}>
                        {adv.toUpperCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input type="hidden" name="" value={advocateType} />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="barNumber">Bar Number</Label>
                </div>
                <Input type="number" name="barNumber" id="barNumber" />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="yearExperience">Experience (In Year)</Label>
                </div>
                <Input
                  type="number"
                  name="yearExperience"
                  id="yearExperience"
                />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="resumePhotoUrl">License File</Label>
                </div>
                <CustomProfileUploader
                  currentImage={licenseFileUrl}
                  onUploadComplete={(url: string) => setLicenseFileUrl(url)}
                  imageUploadName="Upload License Photo"
                />
                <Input
                  type="hidden"
                  name="license"
                  value={licenseFileUrl}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  //   disabled={
                  //     isPending || !licenseFileUrl || !profilePhotoUrl || !gender
                  //   }
                  className="w-full"
                >
                  {/* {isPending ? <Loader /> : "Submit"} */}
                  Submit
                </Button>
              </div>
            </div>
            <Input type="hidden" value={currentUserId} name="currentUserId" />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
