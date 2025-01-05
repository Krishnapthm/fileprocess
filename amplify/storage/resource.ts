import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'amplifyFileInput',
    access: (allow) => ({
        'input/*': [
            allow.guest.to(['read', 'write', 'delete']),
        ],

    })
});