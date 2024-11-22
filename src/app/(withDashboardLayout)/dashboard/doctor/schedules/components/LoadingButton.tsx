import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingButtonProps {
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  loading: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  children: React.ReactNode;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  size = 'medium',
  onClick,
  loading,
  variant = 'contained',
  children,
}) => {
  return (
    <Button
      size={size}
      onClick={onClick}
      variant={variant}
      disabled={loading} 
      startIcon={loading ? <CircularProgress size={16} /> : undefined} 
    >
      {loading ? 'Submitting...' : children}
    </Button>
  );
};

export default LoadingButton;
