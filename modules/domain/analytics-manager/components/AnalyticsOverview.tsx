import { Badge } from 'components/badge';
import { Divider } from 'components/divider';
import { Subheading } from 'components/heading'


const Stat = ({ title, value, change }: { title: string; value: string; change: string }) =>    {
    return (
      <div>
        <Divider />
        <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
        <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
        <div className="mt-3 text-sm/6 sm:text-xs/6">
          <Badge color={change.startsWith('+') ? 'lime' : 'pink'}>{change}</Badge>{' '}
          <span className="text-zinc-500">from last week</span>
        </div>
      </div>
    )
  }
  

export const AnalyticsOverview = () => {
    return (
        <div>
            <Subheading>Overview</Subheading>
            <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <Stat title="Total revenue" value="$2.6M" change="+4.5%" />
                <Stat title="Average order value" value="$455" change="-0.5%" />
                <Stat title="Tickets sold" value="5,888" change="+4.5%" />
                <Stat title="Pageviews" value="823,067" change="+21.2%" />
            </div>
        </div>
    )
}
