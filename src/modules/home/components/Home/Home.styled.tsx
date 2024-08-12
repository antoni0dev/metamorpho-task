import { COLORS } from '@/common/constants';
import styled from 'styled-components';

export const PageContainer = styled.div`
  padding-top: 128px;
  min-height: 100%;
  background-color: ${COLORS.gray[200]};

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AddressInputWrapper = styled.div`
  height: 200px;
  margin-inline: auto;
  background-color: ${COLORS.white};
  width: 400px;
  padding: 48px 24px;
  border-radius: 12px;
  box-shadow:
    0 4px 8px 0 ${COLORS.gray[300]},
    0 6px 20px 0 ${COLORS.gray[300]};
`;
