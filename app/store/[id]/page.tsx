import { auth } from 'auth'
import { NewArrivals } from 'blocks/product/new-arrivals'
import { VendorCard } from 'blocks/store/vendor-card'
import { redirect } from 'next/navigation'

const Page = async () => {
    const session = await auth()
    if (!session) redirect('/')

    return (
        <div className="flex flex-col gap-12">
            <VendorCard />
            <NewArrivals />
        </div>
    )
}

export default Page
