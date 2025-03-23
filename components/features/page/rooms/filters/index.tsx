import { RoomsCount } from "@/components/features/page/rooms/Header/RoomsCount";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  FaArrowDownLong,
  FaArrowUpLong,
  FaSortNumericDown,
  FaSortNumericUp,
  HiDotsHorizontal,
  HiMiniUserGroup,
  MdAttachMoney,
} from "@/components/icons";

export const Filters = ({ roomsCount }: { roomsCount: number }) => (
  <div className="flex w-full items-center justify-between pt-4 md:pt-0">
    <RoomsCount roomsCount={roomsCount} />
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          <HiDotsHorizontal />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto border-none bg-transparent p-0">
        <div className="flex items-center justify-center">
          <div className="aspect-sqare grid grid-cols-1 grid-rows-3 rounded-md bg-secondary p-3">
            <div className="flex items-center justify-start gap-2 rounded-md p-2 text-xs font-bold">
              <HiMiniUserGroup size={22} />
              <Button
                size="icon"
                variant="ghost"
                className="border border-foreground/10"
              >
                <FaArrowUpLong />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="border border-foreground/10"
              >
                <FaArrowDownLong />
              </Button>
            </div>
            <div className="flex items-center justify-start gap-2 rounded-md p-2 text-xs font-bold">
              <MdAttachMoney size={22} />
              <Button
                size="icon"
                variant="ghost"
                className="border border-foreground/10"
              >
                <FaArrowUpLong />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="border border-foreground/10"
              >
                <FaArrowDownLong />
              </Button>
            </div>
            <div className="flex items-center justify-start gap-2 rounded-md p-2 text-xs font-bold">
              <Button
                size="icon"
                variant="ghost"
                className="border border-foreground/10"
              >
                <FaSortNumericDown />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="border border-foreground/10"
              >
                <FaSortNumericUp />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
);
