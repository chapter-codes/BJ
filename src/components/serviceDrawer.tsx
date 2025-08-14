import {
  Drawer,
  DrawerClose,
  DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {Button} from '@/components/ui/button'

type Drawer = {children: React.ReactNode}

function ServiceDrawer({children}:Drawer) {
  return (
    <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
            <DrawerClose>
                <Button variant="outline">Cancel</Button>
            </DrawerClose>
            {children}
        </DrawerContent>
    </Drawer>
  )
}

export default ServiceDrawer
