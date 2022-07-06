import React, { useEffect, useState } from 'react';
import { Card, Pane, Text, Heading, Strong } from 'evergreen-ui';
import http from '../../utils/axios-instance';
import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentUserId } from "../../redux/user/user.selectors";
import { AgendaEvent } from '../agenda-page/agenda-page.types';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import ContentSpinner from '../../components/content-spinner/content-spinner.component';
import useWindowDimensions from '../../hooks/use-window-dimensions/use-window-dimensions';

const DashboardPage = () => {
  const userId = useSelector(selectCurrentUserId);
  const userInfo = useSelector(selectCurrentUser);
  const [todayEvents, setTodayEvents] = useState<AgendaEvent[]>();
  const { t } = useTranslation(['ui'])
  useEffect(() => {
    const getTodayEvents = async () => {
      const res = await http.get<AgendaEvent[]>(`/todayevents/${userId}`);
      const eventData = res.data.map((event: AgendaEvent) => ({
        ...event,
        startDate: new Date (event.startDate),
        ...event.endDate ? { endDate: new Date (event.endDate) } : {},
      }))
      setTodayEvents(eventData)
    }
    getTodayEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Pane
      margin={30}
    >
      <Pane>
        <Heading
          color={'#3A3E58'}
          is={'h1'}
          size={800}
        >
          { userInfo && `${t('hello')} ${userInfo.names}!` }
        </Heading>
        <Heading 
          color={'#3A3E58'}
          id={'h2'}
          size={500}
        >
          { todayEvents?.length ? t('eventsForTodayMessage') : t('noEventsForTodayMessage') }
        </Heading>
      </Pane>
      <Pane>
        { todayEvents ?
          todayEvents.map((event, idx) => {
            const { startDate, endDate } = event;
            const haveEndDate = endDate && !(format(startDate, 'HH:mm') === format(endDate, 'HH:mm'));
            return (
              <Card
                elevation={3}
                padding={15}
                marginTop={30}
                key={`today-event-${idx}`}
              >
                <Pane><Text size={500}>{ format(startDate, 'h:mm a') + (haveEndDate ? ' - ' + format(endDate, 'h:mm a') : '') }</Text></Pane>
                <Strong size={600}>{ event.title }</Strong>
              </Card>
            )
          }) : <ContentSpinner />
        }
      </Pane>
    </Pane>
  )
};

export default DashboardPage;
