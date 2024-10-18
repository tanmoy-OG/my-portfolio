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
  <div className="h-screen content-center bg-secondary">
    <Card className="mx-auto w-[400px] border-zinc-800 bg-background">
      <CardHeader>
        <CardTitle className="text-accent-foreground">Admin Login</CardTitle>
        <CardDescription className="text-foreground">
          Welcome back OG Boy!!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input
            className="text-foreground caret-foreground"
            id="password"
            placeholder="You remember the password right??"
            type="password"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-accent text-accent-foreground transition-all hover:bg-accent-hover active:bg-accent">
          Login
        </Button>
      </CardFooter>
    </Card>
  </div>
)

export default Login
