"use client";

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
import {
  type AdvocateOnboardingFormState,
  onboardingAdvocate,
} from "../../../../server/actions/onboarding/advocateOnboarding";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  User,
  FileText,
  Scale,
  Calendar,
  MapPin,
  File,
} from "lucide-react";

type AdvocateOnboardingFormProps = {
  className?: string;
};

export default function AdvocateOnboardingForm({
  className,
}: AdvocateOnboardingFormProps) {
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string>("");
  const [licenseFileUrl, setLicenseFileUrl] = useState<string>("");
  const router = useRouter();
  const [sex, setSex] = useState<string>("");
  const [advocateType, setAdvocateType] = useState<string>("");
  const advocateTypeOptions = advocateTypeEnum.enumValues;

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const initialState: AdvocateOnboardingFormState = {
    errors: {},
  } as AdvocateOnboardingFormState;

  const [state, formAction, isPending] = useActionState<
    AdvocateOnboardingFormState,
    FormData
  >(onboardingAdvocate, initialState);

  const calculateProgress = () => {
    let completed = 0;
    if (profilePhotoUrl) completed++;
    if (state.inputs?.address) completed++;
    if (sex) completed++;
    if (advocateType) completed++;
    if (state.inputs?.barNumber) completed++;
    if (state.inputs?.yearsExperience) completed++;
    if (licenseFileUrl) completed++;
    return (completed / totalSteps) * 100;
  };

  useEffect(() => {
    if (state.success && state.message) {
      toast(state.message);
      setTimeout(() => {
        router.push(state.redirectTo as string);
      }, 1500);
    }
    if (!state.success && state.message) {
      toast.error(state.message);
    }
  }, [state.message, state.timestamp, state.success]);

  return (
    <div
      className={cn(
        "flex flex-col gap-8 py-8 max-w-[800px] mx-auto justify-center min-h-screen px-4 mt-20",
        className
      )}
    >
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4 text-white">
          <Scale className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Advocate Registration
          </h1>
        </div>
        <p className="text-muted-foreground max-w-md mx-auto">
          Join our network of verified legal professionals
        </p>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{Math.round(calculateProgress())}% Complete</span>
          </div>
          <Progress value={calculateProgress()} className="h-2" />
        </div>
      </div>

      <Card className="shadow-lg border  backdrop-blur-md  bg-gradient-to-b from-gray-400 via-[#d8d8d8] to-[#bcbcbc] text-black">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl">Professional Information</CardTitle>
          <CardDescription className="text-base">
            Please provide your professional details for verification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-black" />
                  <Label
                    htmlFor="profilePhotoUrl"
                    className="text-base font-medium"
                  >
                    Profile Picture
                  </Label>
                  {profilePhotoUrl && (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  )}
                </div>
                <div className="flex flex-col items-center gap-4">
                  {!profilePhotoUrl && !state.inputs?.image ? (
                    <div className="w-full max-w-sm">
                      <CustomProfileUploader
                        currentImage={profilePhotoUrl}
                        onUploadComplete={(url: string) =>
                          setProfilePhotoUrl(url)
                        }
                        imageUploadName="Upload Your Photo"
                      />
                    </div>
                  ) : (
                    <div className="relative group">
                      <Image
                        src={profilePhotoUrl || (state.inputs?.image as string)}
                        alt="profile picture"
                        height={200}
                        width={200}
                        className="h-32 w-32 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                      />
                      <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Uploaded
                      </Badge>
                    </div>
                  )}
                </div>
                <Input
                  type="hidden"
                  name="image"
                  value={profilePhotoUrl}
                  required
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-black" />
                  <Label htmlFor="address" className="text-base font-medium">
                    Address
                  </Label>
                </div>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your complete address"
                  className="h-12"
                  defaultValue={state.inputs?.address}
                />
              </div>

              <div className="flex justify-between">
                {/* gender selection */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-black" />
                    <Label htmlFor="sex" className="text-base font-medium">
                      Gender
                    </Label>
                    {sex && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                  </div>
                  <Select
                    name="sex"
                    onValueChange={(value) => setSex(value)}
                    defaultValue={state.inputs?.sex}
                    value={sex}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent id="sex">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="sex" value={sex} />
                </div>
                {/* advocate type */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-black" />
                    <Label
                      htmlFor="advocateType"
                      className="text-base font-medium"
                    >
                      Advocate Type
                    </Label>
                    {advocateType && (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                  <Select
                    onValueChange={(value) => setAdvocateType(value)}
                    defaultValue={state.inputs?.advocateType}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your specialization" />
                    </SelectTrigger>
                    <SelectContent id="advocateType">
                      {advocateTypeOptions.map((adv) => (
                        <SelectItem value={adv} key={adv}>
                          {adv.charAt(0).toUpperCase() +
                            adv.slice(1).toLowerCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input
                    type="hidden"
                    name="advocateType"
                    value={advocateType}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                {/* bar number */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-black" />
                    <Label
                      htmlFor="barNumber"
                      className="text-base font-medium"
                    >
                      Bar Number
                    </Label>
                  </div>
                  <Input
                    type="number"
                    name="barNumber"
                    id="barNumber"
                    placeholder="Enter your bar registration number"
                    className="h-12"
                    defaultValue={state.inputs?.barNumber}
                  />
                </div>
                {/* years of experience */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-black" />
                    <Label
                      htmlFor="yearExperience"
                      className="text-base font-medium"
                    >
                      Years of Experience
                    </Label>
                  </div>
                  <Input
                    type="number"
                    name="yearsExperience"
                    id="yearExperience"
                    placeholder="Enter years of practice"
                    className="h-12"
                    defaultValue={state.inputs?.yearsExperience}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-black" />
                  <Label
                    htmlFor="resumePhotoUrl"
                    className="text-base font-medium"
                  >
                    License Document
                  </Label>
                  {licenseFileUrl && (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  )}
                </div>
                <div className="space-y-4">
                  {!licenseFileUrl && !state.inputs?.licenseFileUrl ? (
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                      <CustomProfileUploader
                        currentImage={licenseFileUrl}
                        onUploadComplete={(url: string) =>
                          setLicenseFileUrl(url)
                        }
                        imageUploadName="Upload License Document"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Upload a clear image of your license document
                      </p>
                    </div>
                  ) : (
                    <div className="relative">
                      <Image
                        src={
                          licenseFileUrl ||
                          (state.inputs?.licenseFileUrl as string)
                        }
                        alt="License File"
                        height={200}
                        width={500}
                        className="w-full max-h-64 rounded-lg object-cover border shadow-md"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Uploaded
                      </Badge>
                    </div>
                  )}
                </div>
                <Input
                  type="hidden"
                  name="licenseFileUrl"
                  value={licenseFileUrl}
                  required
                />
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="text-black  w-full hover:cursor-pointer hover:text-white h-12 text-base font-medium bg-gray-300  transition-all duration-200 shadow-lg hover:shadow-xl"
                  disabled={
                    isPending || !licenseFileUrl || !profilePhotoUrl || !sex
                  }
                >
                  {isPending ? (
                    <div className="flex items-center gap-2 ">
                      <Loader />
                      <span className="">Processing Application...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="!text-black">Submit Application</span>
                    </div>
                  )}
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    {calculateProgress() === 100
                      ? "✅ All fields completed - ready to submit!"
                      : `${Math.round(calculateProgress())}% complete - ${
                          totalSteps -
                          Math.round((calculateProgress() / 100) * totalSteps)
                        } fields remaining`}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
