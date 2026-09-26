import { Hobby, Skill } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

type Props = {
        hobbies: Hobby[];
        setHobbies: (experiences: Hobby[]) => void;

}



const HobbiesForm: React.FC<Props> = (props: Props) => {

        const [newHobby, setNewHobby] = useState<Hobby>(
                {
                        id: "",
                        name: ""
                }
        )

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, fied: keyof Skill) => {
                setNewHobby({ ...newHobby, [fied]: e.target.value })
        }

        const handleAddHobbies = () => {
                props.setHobbies([...props.hobbies, newHobby])
                setNewHobby(
                        {
                                id: "",
                                name: ""
                        }
                )
        }

        return (
                <div>
                        <div
                                className='mt-4'
                        >
                                <input
                                        type="text"
                                        placeholder={`Loisir`}
                                        value={newHobby.name}
                                        onChange={(e) => handleChange(e, "name")}
                                        className='input input-bordered w-full'
                                />
                        </div>
                        <button
                                onClick={handleAddHobbies}
                                className='btn btn-primary mt-4'
                        >
                                Ajouter
                                <Plus className='w-4' />
                        </button>
                </div>
        )
}

export default HobbiesForm