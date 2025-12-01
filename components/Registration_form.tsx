"use client"

import { useState } from "react"
import { z } from "zod"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})
const options = [
  "Web Dev",
  "App Dev",
  "AI/ML",
  "System Development",
  "BlockChain",
  "Game Dev",
  "Cloud",
  "CyberSecurity",
  "Competitive Programming"
]
const Registration_form = () => {
  const [formData, setFormData] = useState({
    username: "",
    contact: "",
    email: "",
    whyGfg: "",
    domain1: "",
    domain2: "",
    domain3: "",
  })
  const [resume, setResume] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    if (id === "why-gfg") {
      setFormData((prev) => ({ ...prev, whyGfg: value }))
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0])
    }
  }

  return (
    <div className="w-full max-w-md text-white bg-black/20 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
      <FieldSet>
        <FieldGroup className="space-y-2">
          <Field>
            <FieldLabel htmlFor="username" className="text-lg font-semibold">Full Name</FieldLabel>
            <Input
              id="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-black/20 border-white/20 text-white placeholder:text-white/40 focus:border-green-400 focus:ring-green-400/20"
            />
            <FieldDescription className="text-white/60">
              Write your full name for your account.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="contact" className="text-lg font-semibold">Contact Info</FieldLabel>
            <Input
              id="contact"
              type="number"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Phone number"
              className="bg-black/20 border-white/20 text-white placeholder:text-white/40 focus:border-green-400 focus:ring-green-400/20"
            />
            <FieldDescription className="text-white/60">
              Provide your Phone number.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="email" className="text-lg font-semibold">Email Info</FieldLabel>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="rollno@kiit.ac.in"
              className="bg-black/20 border-white/20 text-white placeholder:text-white/40 focus:border-green-400 focus:ring-green-400/20"
            />
            <FieldDescription className="text-white/60">
              Provide your KIIT email address.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="resume" className="text-lg font-semibold">Resume Upload</FieldLabel>
            <Input
              id="resume"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="bg-black/20 border-white/20 text-white file:bg-green-500 file:text-white file:border-0 file:rounded-md file:px-2 file:mr-4 hover:file:bg-green-600 cursor-pointer"
            />
            <FieldDescription className="text-white/60">
              Upload your resume (PDF, DOC, DOCX).
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="why-gfg" className="text-lg font-semibold">Why GFG?</FieldLabel>
            <Textarea
              id="why-gfg"
              value={formData.whyGfg}
              onChange={handleChange}
              placeholder="Tell us why you want to join GFG..."
              className="bg-black/20 border-white/20 text-white placeholder:text-white/40 focus:border-green-400 focus:ring-green-400/20 min-h-[100px]"
            />
            <FieldDescription className="text-white/60">
              Explain your interest in GFG.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="domain1" className="text-lg font-semibold">Top Domain Preference 1</FieldLabel>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, domain1: value }))}>
              <SelectTrigger className="bg-black/20 border-white/20 text-white placeholder:text-white/40 focus:border-green-400 focus:ring-green-400/20">
                <SelectValue placeholder="Select Domain" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldDescription className="text-white/60">
              Your first choice domain.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="domain2" className="text-lg font-semibold">Top Domain Preference 2</FieldLabel>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, domain2: value }))}>
              <SelectTrigger className="bg-black/20 border-white/20 text-white placeholder:text-white/40 focus:border-green-400 focus:ring-green-400/20">
                <SelectValue placeholder="Select Domain" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldDescription className="text-white/60">
              Your second choice domain.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="domain3" className="text-lg font-semibold">Top Domain Preference 3</FieldLabel>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, domain3: value }))}>
              <SelectTrigger className="bg-black/20 border-white/20 text-white placeholder:text-white/40 focus:border-green-400 focus:ring-green-400/20">
                <SelectValue placeholder="Select Domain" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldDescription className="text-white/60">
              Your third choice domain.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}

export default Registration_form