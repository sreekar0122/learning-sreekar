import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Stack,
  Input,
  Snackbar,
  IconButton,
  Alert,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const FileUploader = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleFileChange = (event, category) => {
    const files = Array.from(event.target.files);

    switch (category) {
      case 'documents':
        setSelectedDocument(files[0]);
        break;
      case 'images':
        setSelectedImages(files);
        break;
      case 'videos':
        setSelectedVideo(files[0]);
        break;
      default:
        break;
    }

    setErrorMessage('');
  };

  const handleFileRemove = (category, inputRef) => {
    switch (category) {
      case 'documents':
        setSelectedDocument(null);
        break;
      case 'images':
        setSelectedImages([]);
        break;
      case 'videos':
        setSelectedVideo(null);
        break;
      default:
        break;
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setErrorMessage('');
  };

  const uploadFiles = async (files, category) => {
    const uploadPromises = files.map((file) => {
      const formData = new FormData();
      formData.append('file', file);

      return fetch(`http://localhost:3000/uploads/${category}`, {
        method: 'POST',
        body: formData,
      });
    });

    try {
      await Promise.all(uploadPromises);
      setSuccessMessage(`${category.charAt(0).toUpperCase() + category.slice(1)} uploaded successfully`);
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Upload failed. Please check the console for details.');
    }
  };

  const handleUpload = (category) => {
    switch (category) {
      case 'documents':
        if (selectedDocument) {
          uploadFiles([selectedDocument], category);
        } else {
          setErrorMessage('Please select a document to upload.');
        }
        break;
      case 'images':
        if (selectedImages.length >= 2) {
          uploadFiles(selectedImages, category);
        } else {
          setErrorMessage('Please select at least 2 images to upload.');
        }
        break;
      case 'videos':
        if (selectedVideo) {
          uploadFiles([selectedVideo], category);
        } else {
          setErrorMessage('Please select a video to upload.');
        }
        break;
      default:
        setErrorMessage('Please select a file to upload.');
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const documentInputRef = React.useRef(null);
  const imagesInputRef = React.useRef(null);
  const videoInputRef = React.useRef(null);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Box
        sx={{
          width: '400px',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff',
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Upload Files
        </Typography>
        <Stack spacing={4}>
          <div>
            <Typography variant="h6">Documents</Typography>
            <Input
              type="file"
              inputProps={{ accept: '.doc,.docx,.pdf' }}
              onChange={(e) => handleFileChange(e, 'documents')}
              sx={{ mt: 1 }}
              inputRef={documentInputRef} 
            />
            {selectedDocument && (
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Typography variant="body1">{selectedDocument.name}</Typography>
                <IconButton
                  color="error"
                  onClick={() => handleFileRemove('documents', documentInputRef)}
                  sx={{ ml: 1 }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleUpload('documents')}
              disabled={!selectedDocument}
              sx={{ mt: 2 }}
            >
              Upload Document
            </Button>
          </div>

          <div>
            <Typography variant="h6">Images</Typography>
            <Input
              type="file"
              inputProps={{ accept: '.jpg,.jpeg,.gif,.png', multiple: true }}
              onChange={(e) => handleFileChange(e, 'images')}
              sx={{ mt: 1 }}
              inputRef={imagesInputRef} 
            />
            {selectedImages.length > 0 && (
              <Box sx={{ mt: 1 }}>
                {selectedImages.map((image) => (
                  <Box
                    key={image.name}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Typography variant="body1">{image.name}</Typography>
                    <IconButton
                      color="error"
                      onClick={() => handleFileRemove('images', imagesInputRef)}
                      sx={{ ml: 1 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleUpload('images')}
              disabled={selectedImages.length < 2}
              sx={{ mt: 2 }}
            >
              Upload Images
            </Button>
          </div>

          <div>
            <Typography variant="h6">Videos</Typography>
            <Input
              type="file"
              inputProps={{ accept: '.mp4,.wmv' }}
              onChange={(e) => handleFileChange(e, 'videos')}
              sx={{ mt: 1 }}
              inputRef={videoInputRef} 
            />
            {selectedVideo && (
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Typography variant="body1">{selectedVideo.name}</Typography>
                <IconButton
                  color="error"
                  onClick={() => handleFileRemove('videos', videoInputRef)}
                  sx={{ ml: 1 }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleUpload('videos')}
              disabled={!selectedVideo}
              sx={{ mt: 2 }}
            >
              Upload Video
            </Button>
          </div>

          {errorMessage && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          )}

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            message={successMessage}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSnackbarClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default FileUploader;
