import useOnline from '@/hooks/useOnline';
import Switcher from '../sync-web-storage/components/Switcher';

function CheckOnOffline() {
  const isOnline = useOnline();

  return (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 20 }}>
      <h1>Check On/Offline</h1>
      <Switcher value={isOnline} />
    </div>
  );
}

export default CheckOnOffline;
