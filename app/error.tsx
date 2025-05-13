'use client'
 
import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import { AlertCircle, ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
 
export default function Error() {
  const router = useRouter()
  
  return (
    <Card className=''>
      <CardHeader className='items-center'>
        <AlertCircle className='size-16' />
        <p>Something went wrong. Please try again.</p>
      </CardHeader>
      <CardFooter className='justify-center gap-4'>
        <Button variant="outline" onClick={() => router.back()}><ArrowLeft className='size-4 mr-2' /> Go Back</Button>
        <Link href="/"><Button><Home className='size-4 mr-2' /> Go Home</Button></Link>
      </CardFooter>
    </Card>
  )
}