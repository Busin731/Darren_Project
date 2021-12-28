import { TranslationMessages } from 'react-admin';
import frenchMessages from 'ra-language-french';

const customFrenchMessages: TranslationMessages = {
    ...frenchMessages,
    pos: {
        search: 'Rechercher',
        configuration: 'Configuration',
        language: 'Langue',
        theme: {
            name: 'Theme',
            light: 'Clair',
            dark: 'Obscur',
        },
        dashboard: {
            monthly_revenue: 'CA à 30 jours',
            month_history: "Chiffre d'affaire sur 30 jours",
            new_orders: 'Nouvelles commandes',
            pending_reviews: 'Commentaires à modérer',
            all_reviews: 'Voir tous les commentaires',
            new_customers: 'Nouveaux clients',
            all_customers: 'Voir tous les clients',
            pending_orders: 'Commandes à traiter',
            order: {
                items:
                    'par %{customer_name}, un poster |||| par %{customer_name}, %{nb_items} posters',
            },
            welcome: {
                title: 'Bienvenue sur la démo e-commerce de react-admin',
                subtitle:
                    "Ceci est le back-office d'un magasin de posters imaginaire. N'hésitez pas à explorer et à modifier les données. La démo s'exécute en local dans votre navigateur, et se remet à zéro chaque fois que vous rechargez la page.",
                ra_button: 'Site web de react-admin',
                demo_button: 'Code source de cette démo',
            },
        },
        menu: {
            sales: 'Ventes',
            catalog: 'Catalogue',
            customers: 'Clients',
        },
    },
    resources: {
        users: {
            name: 'User |||| Users'
        },
        posts: {
            name: 'Post |||| Posts'
        },
        comments: {
            name: 'Comment |||| Comments',
            fields: {
                date_gte: 'At'
            }
        },
        customers: {
            name: 'Customer |||| Customers',
            fields: {
                commands: 'Orders',
                first_seen: 'First seen',
                groups: 'Segments',
                last_seen: 'Last seen',
                last_seen_gte: 'Visited Since',
                name: 'Name',
                total_spent: 'Total spent',
                password: 'Password',
                confirm_password: 'Confirm password',
                stateAbbr: 'State',
            },
            filters: {
                last_visited: 'Last visited',
                today: 'Today',
                this_week: 'This week',
                last_week: 'Last week',
                this_month: 'This month',
                last_month: 'Last month',
                earlier: 'Earlier',
                has_ordered: 'Has ordered',
                has_newsletter: 'Has newsletter',
                group: 'Segment',
            },
            fieldGroups: {
                identity: 'Identity',
                address: 'Address',
                stats: 'Stats',
                history: 'History',
                password: 'Password',
                change_password: 'Change Password',
            },
            page: {
                delete: 'Delete Customer',
            },
            errors: {
                password_mismatch:
                    'The password confirmation is not the same as the password.',
            },
        },
        segments: {
            name: 'Segment |||| Segments',
            fields: {
                customers: 'Clients',
                name: 'Nom',
            },
            data: {
                compulsive: 'Compulsif',
                collector: 'Collectionneur',
                ordered_once: 'A commandé',
                regular: 'Régulier',
                returns: 'A renvoyé',
                reviewer: 'Commentateur',
            },
        },
    },
};

export default customFrenchMessages;
