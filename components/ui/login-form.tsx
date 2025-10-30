// File: components/ui/login-form.tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col  gap-6 ", className)} {...props}>
      <Card className="bg-background border-none">
        <CardHeader className="">
          <CardTitle className="text-xl">Log in to Resend</CardTitle>
          <CardDescription>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="py-3">
            <FieldGroup>
             
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline text-blue-400"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center"></FieldDescription>
              </Field>
            </FieldGroup>
          </form>
          <FieldSeparator className="">OR</FieldSeparator>
          <Field className="pt-5 grid grid-cols-2 gap-1 pb-2">
            <Button variant="outline" type="button">
              Login with Github
            </Button>
            <Button variant="outline" type="button">
              Login with Google
            </Button>
          </Field>
          <Button variant="outline" type="button" className="w-full pt-2">
            Login with SSO
          </Button>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By Siginng in, you agree to our <a href="#" className="text-blue-500">Terms of Service</a>{" "}
        and <a href="#" className="text-blue-500">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
