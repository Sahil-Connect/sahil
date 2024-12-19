import { Button, Card } from "ui"

import { HiOutlineMap, HiOutlineSignalSlash } from 'react-icons/hi2'
import Link from "next/link"

export  function NavigationPreferences() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <Card>
        <h3 className="text-lg font-semibold card-title">
        Choose Navigation Method
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="h-auto py-4 flex flex-col items-center" variant="outline">
              <HiOutlineMap className="h-6 w-6 mb-2" />
              <span>Use Map</span>
            </Button>
            <p>Follow Recommended Routes</p>
            <Button className="h-auto py-4 flex flex-col items-center" variant="outline">
              <HiOutlineSignalSlash className="h-6 w-6 mb-2" />
              <span>Offline Navigation</span>
            </Button>
            <p> Navigate Independently</p>
          </div>
          <Button className="w-full">
          Start Delivery
          </Button>
        </div>
      </Card>
    </div>
  )
}

