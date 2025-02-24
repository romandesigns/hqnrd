import { RoomsCount } from "@/components/features/page/rooms/Header/RoomsCount";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  FaArrowDownLong,
  FaArrowUpLong,
  FaSortNumericDown,
  FaSortNumericUp,
  HiDotsHorizontal,
  HiMiniUserGroup,
  MdAttachMoney
} from "@/components/icons";

export const Filters = () => (
  <div className="flex items-center justify-between w-full pt-4 md:pt-0">
    <RoomsCount />
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          Filters
          <HiDotsHorizontal />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-none bg-transparent">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 grid-rows-3 bg-secondary p-3 rounded-md aspect-sqare">
            <div className="flex items-center justify-start p-2 text-xs gap-2  rounded-md font-bold">
              <HiMiniUserGroup size={22} />
              <Button size="icon" variant="ghost"
                      className="border border-foreground/10"><FaArrowUpLong /></Button>
              <Button size="icon" variant="ghost"
                      className="border border-foreground/10"><FaArrowDownLong /></Button>
            </div>
            <div className="flex items-center justify-start p-2 text-xs gap-2  rounded-md font-bold">
              <MdAttachMoney size={22} />
              <Button size="icon" variant="ghost"
                      className="border border-foreground/10"><FaArrowUpLong /></Button>
              <Button size="icon" variant="ghost"
                      className="border border-foreground/10"><FaArrowDownLong /></Button>
            </div>
            <div className="flex items-center justify-start p-2 text-xs gap-2  rounded-md font-bold">
              <Button size="icon" variant="ghost"
                      className="border border-foreground/10"><FaSortNumericDown /></Button>
              <Button size="icon" variant="ghost"
                      className="border border-foreground/10"><FaSortNumericUp /></Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
);
