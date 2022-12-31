import { Medicine } from '../../app/models/medicine.model';

export function postMedicine(medicine: Medicine)
{
    medicines = [
        ...medicines,
        {
            ...medicine,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Medicine> }>((resolve) =>
        setTimeout(() => resolve({ data: medicines }), 1000)
    );
}

export function getMedicines()
{
    return new Promise<{ data: Array<Medicine> }>((resolve) =>
        setTimeout(() => resolve({ data: medicines }), 1000)
    );
}

export function putMedicine(medicine: Medicine)
{
    medicines = [
        ...medicines.filter(doc => doc.id !== medicine.id),
        {
            ...medicine,
            id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString()
        }
    ];

    return new Promise<{ data: Array<Medicine> }>((resolve) =>
        setTimeout(() => resolve({ data: medicines }), 1000)
    );
}

export function deleteMedicine(id: string)
{
    medicines = medicines.filter(doc => doc.id !== id);

    return new Promise<{ data: Array<Medicine> }>((resolve) =>
        setTimeout(() => resolve({ data: medicines }), 1000)
    );
}

export let medicines: Array<Medicine> = [
    {
        id: Math.floor(Math.random() * (9999999999999 - 1 + 1) + 1).toString(),
        name: 'Dorflex',
        manufacturer: 'Sanofi'
    }
]