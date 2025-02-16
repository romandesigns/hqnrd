import { CardRoom } from "@/components/features/page/home/Trending/CardRoom";
import { RoomsCount } from "@/components/features/page/rooms/Header/RoomsCount";
import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { Locale } from "@/i18n-config";
import {rooms} from './rooms';
import {Button} from '@/components/ui/button';
import {MdAttachMoney,FaArrowUpLong,FaArrowDownLong,HiMiniUserGroup, FaSortNumericDown,FaSortNumericUp} from '@/components/icons';
import { Label } from "@radix-ui/react-menu";

type SearchParams = { [key: string]: string | string[] | undefined }

interface PageProps {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<SearchParams>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { lang } = params;
  const { categoria } = await props.searchParams;

  return (
    <>
      <Section>
        <Content className="flex-col justify-center">
          <HeadingSection
            className="hidden md:flex"
            showBorders
            title="Showing All Rooms"
            description="All rooms are held to the same high standards"
          />

         <div className="flex justify-between items-center">
            <RoomsCount className='w-auto hidden sm:block'/>
            <div className="flex items-start p-2 py-1 justify-center flex-col md:flex-row md:justify-between">
              <Label className='font-bold text-xs uppercase'>Filters:</Label>
              <div className="flex items-center justify-start ml-auto">
               <span className="flex items-center justify-start p-2 text-xs gap-2  rounded-md font-bold">
                  <HiMiniUserGroup size={22}/>
                  <Button size='icon' variant='ghost' className='border'><FaArrowUpLong/></Button>
                  <Button size='icon' variant='ghost' className='border'><FaArrowDownLong/></Button>
               </span>
                  <span className="flex items-center justify-start p-2 text-xs gap-2  rounded-md font-bold">
                  <MdAttachMoney size={22}/>
                  <Button size='icon' variant='ghost' className='border'><FaArrowUpLong/></Button>
                  <Button size='icon' variant='ghost' className='border'><FaArrowDownLong/></Button>
                </span>
                  <span className="flex items-center justify-start p-2 text-xs gap-2  rounded-md font-bold">
                  <Button size='icon' variant='ghost' className='border'><FaSortNumericDown/></Button>
                  <Button size='icon' variant='ghost' className='border'><FaSortNumericUp/></Button>
                </span>
              </div>
            </div>
         </div>
        </Content>
      </Section>
      <Section>
        <Content className="grid-auto-rows grid grid-cols-1 gap-1 py-14 pt-2 md:grid-cols-2 lg:grid-cols-3">
          {(categoria === 'ver-todas' || categoria === undefined ? rooms : rooms.filter(room => room.slug === categoria)).map(room => <CardRoom lang={lang} key={room.uuid} room={room} /> )}
        </Content>
      </Section>
    </>
  );
}
