import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const Login = () => (
  <div className="h-screen content-center">
    <Card className="mx-auto w-[400px] border-none bg-[#111F43]/90 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-accent-foreground">Admin Login</CardTitle>
        <CardDescription className="text-foreground">
          Welcome back OG Boy!!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input
            className="border-secondary bg-secondary caret-foreground focus:border-accent-foreground"
            id="password"
            placeholder="You remember the password right??"
            type="password"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-accent text-accent-foreground hover:bg-accent-hover">
          Login
        </Button>
      </CardFooter>
    </Card>
  </div>
)

export default Login
