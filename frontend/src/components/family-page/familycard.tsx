import { Edit, Edit2, Edit3, Group, Trash, Trash2, Users, Users2 } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  lastname: string | "Unnamed";
  memberCount?: number;
}

const FamilyCard = ({ lastname, memberCount = 0 }: Props) => {
  return (
    <div className='flex flex-col rounded-2xl bg-lime-600 p-4 text-white h-[150px] w-[250px] gap-y-3 shadow-lg justify-between'>
      <div>
        <p className="text-xl font-bold tracking-wide drop-shadow-sm">
          {lastname} Family
        </p>

        <div className="flex items-center mt-1 text-sm text-lime-100">
          <Users className="w-4 h-4 mr-2" />
          {memberCount === 0 ? (
            <span>No members yet</span>
          ) : (
            <span>{memberCount} member{memberCount > 1 ? "s" : ""}</span>
          )}
        </div>
      </div>


      <div className="flex flex-row justify-between items-center mt-3 w-full">
        <Button className="rounded-full cursor-pointer" size="icon-sm" variant="secondary"><Edit className="size-4 text-lime-900" /></Button>
        <Button size="icon-sm" className="rounded-full cursor-pointer" variant="secondary"><Trash className="text-red-600 size-4" /></Button>
      </div>

    </div>
  )
}

export default FamilyCard