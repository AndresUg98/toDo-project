import {CompleteIcon} from "./CompleteIcon"
import {DeleteIcon} from "./DeleteIcon"


function TodoItem({text,completed,onComplete,onDelete}){
    return(
      <div className={`flex w-full justify-between align-center gap-4 py-2 px-8 border-y-2 border-gray-200 ${completed && 'bg-green-300'}`}>

        <CompleteIcon onComplete={onComplete}/>


        <p className={`font-normal text-lg  ${completed && 'text-zinc-400'} `}>{text}</p>

        <DeleteIcon onDelete={onDelete} completed={completed}/>




      </div>
    )
}

export  {TodoItem};