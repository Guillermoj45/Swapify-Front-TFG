import { IonFooter, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { home, search, add, logoIonitron, personCircleOutline } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate();

    const goToUrl = (url: string) => {
        navigate(url);
    };

    const openAddPostModal = () => {
        console.log('Abrir modal para agregar post');
    };

    return (
        <IonFooter>
            <IonToolbar className="custom-footer">
                <div className="footer-images">
                    <IonButton fill="clear" onClick={() => goToUrl('/posts')}>
                        <IonIcon icon={home} slot="start" style={{ fontSize: '28px' }} />
                    </IonButton>
                    <IonButton fill="clear" onClick={() => goToUrl('/search')}>
                        <IonIcon icon={search} slot="start" style={{ fontSize: '28px' }} />
                    </IonButton>
                    <IonButton fill="clear" onClick={openAddPostModal}>
                        <IonIcon icon={add} slot="start" style={{ fontSize: '28px' }} />
                    </IonButton>
                    <IonButton fill="clear" onClick={() => goToUrl('/health')}>
                        <IonIcon icon={logoIonitron} slot="start" style={{ fontSize: '28px' }} />
                    </IonButton>
                    <IonButton fill="clear" onClick={() => goToUrl('/profile')}>
                        <IonIcon icon={personCircleOutline} slot="start" style={{ fontSize: '34px' }} />
                    </IonButton>
                </div>
            </IonToolbar>
        </IonFooter>
    );
};

export default Footer;
