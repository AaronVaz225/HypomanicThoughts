import { useRef } from 'react';
import { IconCloudUpload, IconDownload, IconX } from '@tabler/icons-react';
import { Button, Group, Text, useMantineTheme } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import classes from './DropzoneButton.module.css';
import api from '../../api/axios.js';



const DropzoneButton = ( {setImageUrl} ) => {
  const theme = useMantineTheme();
  const openRef = useRef(null);
 



const handleDrop = async (files) => {

  try {

    const file = files[0]; //Dropzone gives you an array of files, so grab the last one added
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset","hypomanicthoughts");

    //the cloudinary endpoint
    const response = await api.post(
      "https://api.cloudinary.com/v1_1/dtuho9uiz/image/upload", 
      formData, 
      {
        withCredentials: false //Can't send cookies to cloudinary or else you get an error
      }
    );

    setImageUrl(response.data.secure_url);
    console.log("Image Url Set!")

  } catch (err) {
    console.error(`Error Uploading Image: ${err}`)
  }

  

  
}




  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={handleDrop}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.heic, MIME_TYPES.webp]}
        maxSize={5 * 1024 ** 2} //5MB
        aria-label="Drop files here"
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload size={50} color={theme.colors.blue[6]} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload size={50} stroke={1.5} className={classes.icon} />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>file less than 5mb</Dropzone.Reject>
            <Dropzone.Idle>Upload picture</Dropzone.Idle>
          </Text>

          <Text className={classes.description}>
            Drop files here to upload. Supports <i>.png, .jpeg, .heic, .webp</i> files that
            are less than 5mb in size.
          </Text>
        </div>
      </Dropzone>

      <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
        Select files
      </Button>
    </div>
  );
}

export default DropzoneButton;