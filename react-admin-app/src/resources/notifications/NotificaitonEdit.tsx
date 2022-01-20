import {
    Edit,
    EditProps,
    TextInput,
    Toolbar,
    DateInput,
    FormWithRedirect,
    required,
    ImageInput,
    // SelectInput,
} from "react-admin";
import RichTextInput from 'ra-input-rich-text';
import PreviewImage from "./PreviewImage";
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import Preview from "./Preview";
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from "react";

const Title = (props: any) => {
    const { record } = props;
    return record ? (
        <span>
            {"Notifications"}
        </span>
    ) : null;
};

const NotificationEdit = (props: EditProps) => {
    return (
        <Edit title={ <Title/> } {...props}>
            <NotificationForm/>
        </Edit>
    )
};

const NotificationForm = (props: any) => {

    const { record } = props;

    const [value, setValue] = useState({
        scope: "",
        title: "",
        body: "",
        image: "",
        showfor: ''
    })
    const handleChange = (name: any) => (event: any) => {
        if (name === 'image'){
            value.image = event;
            setValue({ ...value})
        }
        else if(name === 'body'){
            value.body = event;
            setValue({ ...value})
        }
        else {
            setValue({ ...value, [name]: event.target.value })
        }
    }

    useEffect(() => {
        value.scope = record.scope;
        value.body = record.body;
        value.image = record.image;
        value.title = record.title;
        setValue({ ...value });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <FormWithRedirect
            {...props}
            render={(formProps: any) => (
                <Card>
                    <form>
                        <CardContent>
                            <Grid container>
                                <Grid item lg={8}>
                                        <Box flex={2} mr={{ md: 0, lg: '1em' }}>
                                            <Typography variant="h6" gutterBottom>
                                                SCOPE
                                            </Typography>
                                            <Box 
                                                display={{ xs: 'block', sm: 'flex' }}
                                                maxWidth="25em">
                                                <Box
                                                    flex={1}
                                                    mr={{ xs: 0, sm: '0.5em' }}
                                                >
                                                    <TextInput
                                                        source="scope"
                                                        onChange={handleChange('scope')}
                                                        resource="notifications"
                                                        validate={requiredValidate}
                                                        fullWidth
                                                    />
                                                </Box>
                                            </Box>
                                            <Typography variant="h6" gutterBottom>
                                                TITLE
                                            </Typography>
                                            <Box 
                                                display={{ xs: 'block', sm: 'flex' }}
                                                maxWidth="50em">
                                                <Box
                                                    flex={1}
                                                    mr={{ xs: 0, sm: '0.5em' }}
                                                >
                                                    <TextInput
                                                        source="title"
                                                        onChange={handleChange('title')}
                                                        resource="notifications"
                                                        validate={requiredValidate}
                                                        fullWidth
                                                    />
                                                </Box>
                                            </Box>
                                            <Typography variant="h6" gutterBottom>
                                                BODY
                                            </Typography>
                                            <Box 
                                                display={{ xs: 'block', sm: 'flex' }}
                                                maxWidth="50em">
                                                <Box
                                                    flex={1}
                                                    mr={{ xs: 0, sm: '0.5em' }}
                                                >
                                                    <RichTextInput
                                                        source="body"
                                                        onChange={handleChange('body')}
                                                        resource="notifications"
                                                        validate={requiredValidate}
                                                        fullWidth
                                                    />
                                                </Box>
                                            </Box>
                                            <Typography variant="h6" gutterBottom>
                                                IMAGE
                                            </Typography>
                                            <Box 
                                                display={{ xs: 'block', sm: 'flex' }}
                                                maxWidth="25em">
                                                <Box
                                                    flex={1}
                                                    mr={{ xs: 0, sm: '0.5em' }}
                                                >
                                                </Box>
                                                <ImageInput
                                                    source="image"
                                                    onChange={handleChange('image')}
                                                    resource="notifications"
                                                    fullWidth
                                                >
                                                    <PreviewImage source="src"/>
                                                </ImageInput>
                                            </Box>
                                            <Typography variant="h6" gutterBottom>
                                                PUBLISH AT
                                            </Typography>
                                            <Box 
                                                display={{ xs: 'block', sm: 'flex' }}
                                                maxWidth="25em">
                                                <Box
                                                    flex={1}
                                                    mr={{ xs: 0, sm: '0.5em' }}
                                                >
                                                </Box>
                                                <DateInput
                                                    source="publishAt"
                                                    resource='notifications'
                                                    fullWidth
                                                />
                                            </Box>
                                            {/* <Typography variant="h6" gutterBottom>
                                                SHOW FOR
                                            </Typography>
                                            <Box 
                                                display={{ xs: 'block', sm: 'flex' }}
                                                maxWidth="25em">
                                                <Box
                                                    flex={1}
                                                    mr={{ xs: 0, sm: '0.5em' }}
                                                >
                                                </Box>
                                                <SelectInput
                                                    resource="notifications"
                                                    source="showFor"
                                                    fullWidth
                                                    choices={[
                                                        {
                                                            id: 'one_day',
                                                            name: '1 day',
                                                        },
                                                        {
                                                            id: 'one_week',
                                                            name: '1 week',
                                                        },
                                                        {
                                                            id: 'one_month',
                                                            name: '1 month',
                                                        },
                                                        {
                                                            id: 'custom',
                                                            name: 'custom',
                                                            disabled: true,
                                                        },
                                                    ]}
                                                />
                                            </Box> */}
                                            <Typography variant="h6" gutterBottom>
                                                EXPIRE AT
                                            </Typography>
                                            <Box 
                                                display={{ xs: 'block', sm: 'flex' }}
                                                maxWidth="25em">
                                                <Box
                                                    flex={1}
                                                    mr={{ xs: 0, sm: '0.5em' }}
                                                >
                                                </Box>
                                                <DateInput
                                                    source="expireAt"
                                                    resource='notifications'
                                                    fullWidth
                                                />
                                            </Box>
                                        </Box>
                                </Grid>
                                <Grid item lg={4}>
                                    <Typography variant="h6" gutterBottom>
                                        PREVIEW
                                    </Typography>
                                    <Preview {...value}/> 
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Toolbar
                            record={formProps.record}
                            basePath={formProps.basePath}
                            undoable={true}
                            invalid={formProps.invalid}
                            handleSubmit={formProps.handleSubmit}
                            saving={formProps.saving}
                            resource="notifications"
                        />
                    </form>
                </Card>
            )}
        >

        </FormWithRedirect>
    )
}

const requiredValidate = [required()];

export default NotificationEdit;