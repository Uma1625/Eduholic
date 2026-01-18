import { useState, useEffect } from 'react';
import './Toast.css';

/**
 * Toast notification component
 * @param {Object} props
 * @param {string} props.message - The message to display
 * @param {string} props.type - 'success' | 'error' | 'info'
 * @param {boolean} props.isVisible - Whether toast is visible
 * @param {function} props.onClose - Callback when toast closes
 * @param {number} props.duration - Duration in ms before auto-close (default: 5000)
 */
function Toast({ message, type = 'success', isVisible, onClose, duration = 5000 }) {
    useEffect(() => {
        if (isVisible && duration > 0) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    if (!isVisible) return null;

    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };

    return (
        <div className={`toast-container ${type}`}>
            <div className="toast-content">
                <span className="toast-icon">{icons[type]}</span>
                <p className="toast-message">{message}</p>
                <button className="toast-close" onClick={onClose}>×</button>
            </div>
            <div className="toast-progress" style={{ animationDuration: `${duration}ms` }}></div>
        </div>
    );
}

/**
 * Custom hook for managing toast state
 * @returns {Object} Toast state and controls
 */
export function useToast() {
    const [toast, setToast] = useState({
        isVisible: false,
        message: '',
        type: 'success'
    });

    const showToast = (message, type = 'success') => {
        setToast({
            isVisible: true,
            message,
            type
        });
    };

    const hideToast = () => {
        setToast(prev => ({ ...prev, isVisible: false }));
    };

    return {
        toast,
        showToast,
        hideToast
    };
}

export default Toast;
